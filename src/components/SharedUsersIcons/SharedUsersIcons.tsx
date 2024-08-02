import { Avatar, Tooltip } from '@mantine/core';

type SharedUsersIconsProps = {
  visibleFrom?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  users?: {
    name: string;
    image: string;
  }[];
};

export function SharedUsersIcons({
  visibleFrom = 'xs',
  users = [],
}: SharedUsersIconsProps): JSX.Element {
  return (
    <Tooltip.Group openDelay={300} closeDelay={100}>
      <Avatar.Group spacing="sm" visibleFrom={visibleFrom}>
        {users.map(({ name, image }) => (
          <Tooltip key={name} label={name} withArrow>
            <Avatar src={image} radius="sm" alt={name} />
          </Tooltip>
        ))}
      </Avatar.Group>
    </Tooltip.Group>
  );
}
