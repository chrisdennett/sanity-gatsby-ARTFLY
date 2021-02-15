import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import ExternalLink from "./externalLink";

const ContactDetails = ({ contactDetails }) => {
  const { email, facebook, instagram, twitter, linkedIn, youTube } = contactDetails;

  return (
    <Container>
      <SocialLinks>
        {twitter && (
          <ExternalLink to={twitter} showExternalLinkIcon={false}>
            <FaTwitterSquare />
          </ExternalLink>
        )}

        {facebook && (
          <ExternalLink to={facebook} showExternalLinkIcon={false}>
            <FaFacebookSquare />
          </ExternalLink>
        )}

        {instagram && (
          <ExternalLink to={instagram} showExternalLinkIcon={false}>
            <FaLinkedin />
          </ExternalLink>
        )}

        {linkedIn && (
          <ExternalLink to={linkedIn} showExternalLinkIcon={false}>
            <FaLinkedin />
          </ExternalLink>
        )}

        {youTube && (
          <ExternalLink to={youTube} showExternalLinkIcon={false}>
            <IoLogoYoutube />
          </ExternalLink>
        )}
      </SocialLinks>

      {email && (
        <ExternalLink to={`mailto:${email}`} showExternalLinkIcon={false}>
          {email}
        </ExternalLink>
      )}
    </Container>
  );
};

export default ContactDetails;

const Container = styled.div`
  /* max-width: 400px; */
  /* background: white; */

  /* padding: 3vw; */
  margin: 0 auto 30px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-radius: 4px; */
  /* box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), */
  /* 0 3px 14px 2px rgba(0, 0, 0, 0.12); */
`;

const SocialLinks = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;

  a {
    padding: 4px;
  }
`;
