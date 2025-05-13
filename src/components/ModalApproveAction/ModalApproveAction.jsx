import React, { useEffect } from 'react';
import styles from './ModalApproveAction.module.css';

const ModalApproveAction = ({ message, onApprove, onCancel }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Escape') {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [onCancel]);

  return (
    <div className={styles.modalBackdrop} onClick={onCancel}>
      <div className={styles.modalContainer} onClick={e => e.stopPropagation()}>
        <p>{message}</p>
        <div className={styles.buttonGroup}>
          <button onClick={onCancel} className={styles.cancelBtn}>
            Cancel
          </button>
          <button onClick={onApprove} className={styles.approveBtn}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;
