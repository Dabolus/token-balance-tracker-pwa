import React, { FunctionComponent, ReactNode } from 'react';
import { styled } from '@linaria/react';
import Card, { CardProps } from './Card';

export interface NotificationProps {
  open?: boolean;
  message?: ReactNode;
  actions?: ReactNode;
}

type NotificationContainerProps = CardProps & Pick<NotificationProps, 'open'>;

const NotificationContainer = styled<NotificationContainerProps>(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 50%;
  width: 100%;
  max-width: 480px;
  padding: 8px;
  transform: ${({ open }) => `translate(-50%, ${open ? 0 : '-150%'})`};
  transition: 0.3s transform ease-in-out;
`;

const MessageContainer = styled.div`
  flex: 1 1 auto;
`;

const ActionsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: 8px;
`;

const Notification: FunctionComponent<NotificationProps> = ({
  open,
  message,
  actions,
}) => (
  <NotificationContainer open={open}>
    <MessageContainer>{message}</MessageContainer>
    <ActionsContainer>{actions}</ActionsContainer>
  </NotificationContainer>
);

export default Notification;
