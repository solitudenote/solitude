import React, { useState } from "react";
import { Modal, Button } from "antd";

const CustomModal = ({
  modalTitle = "Custom modal",
  isModalOpen,
  modalBody,
  onModalClose
}) => {
  return (
    <Modal
      title={modalTitle}
      visible={isModalOpen}
      onOk={() => onModalClose()}
      onCancel={() => onModalClose()}
    >
      {modalBody}
    </Modal>
  );
};

export default CustomModal;
