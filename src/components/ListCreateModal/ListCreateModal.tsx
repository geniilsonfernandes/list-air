import { Modal } from '@mantine/core';

import { ListCreate } from '@/forms/ListCreateForm';
import { useCreateListModalStore } from '@/store';

export function ListCreateModal() {
  const { isOpen, onClose } = useCreateListModalStore((state) => state);

  return (
    <Modal opened={isOpen} onClose={onClose} title="Criar Lista" centered>
      <ListCreate onCancel={onClose} onSuccess={onClose} />
    </Modal>
  );
}
