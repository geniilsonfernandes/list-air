import { Modal } from '@mantine/core';

import { GloceryItemEdit } from '@/forms/GloceryItemEdit';
import useGloceryModalStore from '@/store/useGloceryModalStore';

export function GloceryModal() {
  const { isOpen, onClose, gloceryItem } = useGloceryModalStore((state) => state);

  return (
    <Modal opened={isOpen} onClose={onClose} title={gloceryItem?.name} centered>
      <GloceryItemEdit onCancel={onClose} onSuccess={onClose} />
    </Modal>
  );
}
