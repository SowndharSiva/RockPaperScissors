import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
export const ResultContainer = styled.div`
  padding: 20px;
  border: solid 1px white;
  border-radius: 10px;
  width: 65%;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  align-items: center;
`
export const Option = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: white;
  font-family: 'Roboto';
`
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
`
export const ScorePhrase = styled.p`
  color: '#223a5f';
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const ScoreNumber = styled.p`
  color: '#223a5f';
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const GameViewContainer = styled.div`
  height: 60vh;
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`

export const TriggerButton = styled.button`
  color: '#223a5f';
  padding: 8px 15px 8px 15px;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 8px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  background-color: white;
  border: 0;
`

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const PopupImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopupBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  max-width: 650px;
  justify-content: space-between;
`

export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GameParticipantText = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: white;
`

export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 700px;
  align-content: center;
`

export const PlayAgainButton = styled.button`
  color: '#223a5f';
  padding: 8px 15px 8px 15px;
  font-size: 16px;
  font-family: 'Roboto';
  margin: 8px;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  background-color: white;
  border: 0;
  align-content: center;
  border-radius: 4px;
`
