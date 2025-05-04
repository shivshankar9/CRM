// src/pages/CampaignPage.jsx

import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const { Option } = Select;

const initialCampaigns = [
  {
    id: 1,
    name: 'Spring Sale',
    channel: 'Email',
    status: 'Active',
    createdAt: '2025-04-01',
    description: 'Launch of spring collection',
  },
  {
    id: 2,
    name: 'Summer Promo',
    channel: 'SMS',
    status: 'Inactive',
    createdAt: '2025-05-15',
    description: 'Discounts on summer wear',
  },
  {
    id: 3,
    name: 'Voice Outreach',
    channel: 'Voice',
    status: 'Active',
    createdAt: '2025-06-10',
    description: 'Customer feedback campaign',
  },
];

const CampaignPage = () => {
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleAddCampaign = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCreateCampaign = (values) => {
    const newCampaign = {
      id: campaigns.length + 1,
      ...values,
      status: 'Active',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setCampaigns([...campaigns, newCampaign]);
    message.success('Campaign created successfully.');
    setIsModalVisible(false);
  };

  const startListening = () => {
    if (!browserSupportsSpeechRecognition) {
      message.error('Browser does not support speech recognition.');
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    form.setFieldsValue({ description: transcript });
  };

  const columns = [
    {
      title: 'Campaign Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Channel',
      dataIndex: 'channel',
      key: 'channel',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1>Campaigns</h1>
      <Button type="primary" onClick={handleAddCampaign} style={{ marginBottom: 16 }}>
        Add Campaign
      </Button>
      <Table
        dataSource={campaigns}
        columns={columns}
        rowKey="id"
      />

      <Modal
        title="Create New Campaign"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateCampaign}
        >
          <Form.Item
            name="name"
            label="Campaign Name"
            rules={[{ required: true, message: 'Please enter campaign name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="channel"
            label="Channel"
            rules={[{ required: true, message: 'Please select a channel' }]}
          >
            <Select placeholder="Select a channel">
              <Option value="Email">Email</Option>
              <Option value="SMS">SMS</Option>
              <Option value="Voice">Voice</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
          >
            <Input.TextArea rows={4} />
            <div style={{ marginTop: 8 }}>
              <Button onClick={startListening} disabled={listening}>
                {listening ? 'Listening...' : 'Start Voice Input'}
              </Button>
              <Button onClick={stopListening} disabled={!listening} style={{ marginLeft: 8 }}>
                Stop
              </Button>
            </div>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create Campaign
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CampaignPage;
