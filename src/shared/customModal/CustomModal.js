import React, { useState } from "react";
import { Modal, Button } from "antd";

const CustomModal = ({}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
