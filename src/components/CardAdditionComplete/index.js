import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Card from '../../common/Card';
import Input from '../../common/Input';
import { CardAdditionCompleteWrapper } from './index.styles';

const CardAdditionComplete = ({ newCardInfo, setNewCardInfo, addNewCard }) => {
  const onChangeNickNameInput = (e) => {
    const { value } = e.target;

    setNewCardInfo({ ...newCardInfo, cardNickName: value });
  };

  const onSumbitAddCard = (e) => {
    e.preventDefault();

    addNewCard();
    alert('새 카드가 등록되었습니다.');
  };

  return (
    <CardAdditionCompleteWrapper onSubmit={onSumbitAddCard}>
      <div className='form__column card-addition-title'>
        <h1>카드등록이 완료되었습니다.</h1>
      </div>
      <div className='form__column card-info'>
        <Card cardInfo={newCardInfo} />
      </div>
      <div className='form__column'>
        <Input
          nickNameInput
          value={newCardInfo.cardNickName}
          onChange={onChangeNickNameInput}
          placeholder='카드 별칭을 입력해주세요.'
        />
      </div>
      <div className='card-form-btns'>
        <Button>다음</Button>
      </div>
    </CardAdditionCompleteWrapper>
  );
};

CardAdditionComplete.propTypes = {
  newCardInfo: PropTypes.shape({
    cardName: PropTypes.string,
    cardNickName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),
  setNewCardInfo: PropTypes.func,
  addNewCard: PropTypes.func,
};

export default CardAdditionComplete;
