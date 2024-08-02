import { ActionIcon, Divider, Flex, Modal, ModalProps, SimpleGrid, Text } from '@mantine/core';
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconLink,
} from '@tabler/icons-react';

import { EmailInviteInput } from '@/components';

export function ShareModal(props: ModalProps) {
  const socials = [
    { name: 'copiar link', icon: <IconLink size={18} />, variant: 'default' },
    { name: 'Whatsapp', icon: <IconBrandWhatsapp size={18} />, variant: 'filled' },
    { name: 'Facebook', icon: <IconBrandFacebook size={18} />, variant: 'filled' },
    { name: 'Twitter', icon: <IconBrandTwitter size={18} />, variant: 'filled' },
    { name: 'Instagram', icon: <IconBrandTelegram size={18} />, variant: 'filled' },
  ];

  return (
    <Modal {...props} title="Compartilhar">
      <EmailInviteInput />
      <Divider my="lg" />
      <SimpleGrid cols={{ base: 3, sm: 3, md: 5 }}>
        {socials.map((social) => (
          <Flex align="center" direction="column" key={social.name}>
            <ActionIcon variant={social.variant} radius="xl" size="xl">
              {social.icon}
            </ActionIcon>
            <Text fz="xs" mt={8} c="dimmed">
              {social.name}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Modal>
  );
}

ShareModal.open = (props: ModalProps) => <ShareModal {...props} />;

ShareModal.close = (props: ModalProps) => <ShareModal {...props} />;
