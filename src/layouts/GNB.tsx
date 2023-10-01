import { Link } from 'react-router-dom';
import ModalPortal from 'commons/ModalPortal';
import { useState } from 'react';
import CategoryModal, { CategoryModalProps } from 'commons/CategoryModal';
import { CategoryModalType } from 'components/molecules/VCategoryModalList';

const GNB = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [speciesOrRegion, setSpeciesOrRegion] =
    useState<CategoryModalType>('species');

  const handleCategoryButtonClick = () => {
    setIsModalOpen(true);
  };
  const handleModalCloseClick = () => {
    setIsModalOpen(false);
    setSpeciesOrRegion('species');
  };
  const handleModalOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSpeciesOrRegion('species');
    }
  };

  const categoryModalProps: CategoryModalProps = {
    handleModalCloseClick,
    handleModalOutsideClick,
    speciesOrRegion,
    setSpeciesOrRegion,
  };
  return (
    <>
      <div>
        <ol>
          <li>
            <button onClick={handleCategoryButtonClick}>카테고리</button>
          </li>
          <li>
            <Link to="/anything">프로필 목록</Link>
          </li>
          <li>
            <Link to="/anything">내 주변 보호소 찾기</Link>
          </li>
          <li>
            <Link to="/anything">등록하기</Link>
          </li>
        </ol>
      </div>
      {isModalOpen && (
        <ModalPortal>
          <CategoryModal {...categoryModalProps} />
        </ModalPortal>
      )}
    </>
  );
};

export default GNB;
