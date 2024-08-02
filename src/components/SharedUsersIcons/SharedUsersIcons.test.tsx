import { render, screen } from '@test-utils';
import { describe, expect, it } from 'vitest';
import { SharedUsersIcons } from './SharedUsersIcons';

describe('SharedUsersIcons', () => {
  it('renders the component', () => {
    render(
      <SharedUsersIcons
        users={[
          { name: 'John Doe 1', image: 'https://i.pravatar.cc/300' },
          { name: 'Jane Doe 2', image: 'https://i.pravatar.cc/300' },
        ]}
      />
    );

    expect(screen.getByAltText('John Doe 1')).toBeInTheDocument();
    expect(screen.getByAltText('Jane Doe 2')).toBeInTheDocument();
  });
});
