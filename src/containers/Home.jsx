import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import HeadingBlock from '../components/HeadingBlock.jsx';
import HomeValueProp from '../components/HomeValueProp.jsx';
import HomeGridBreak from '../components/HomeGridBreak.jsx';
import { resetMessage } from '../store';

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const lastMessage = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const userModalProps = {
    login: {
      loginModalOpen,
      handleLoginModalOpen: () => setLoginModalOpen(true),
      handleLoginModalClose: () => setLoginModalOpen(false),
    },
    signup: {
      signupModalOpen,
      handleSignupModalOpen: () => setSignupModalOpen(true),
      handleSignupModalClose: () => setSignupModalOpen(false),
    },
  };

  return (
    <Segment style={{ padding: 0, border: 0 }}>
      <HeadingBlock modalProps={userModalProps} />
      <HomeValueProp />
      <HomeGridBreak />
    </Segment>
  );
}
