import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate: React.FC = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ut.
          Natus iusto optio ea. Similique, recusandae alias deserunt a
          laboriosam sequi dolorum magni omnis officiis laborum ut quia velit
          hic!
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
