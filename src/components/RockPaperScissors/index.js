import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import GameOptions from '../GameOptions'

import {
  AppContainer,
  ResultContainer,
  OptionContainer,
  Option,
  ScoreContainer,
  ScorePhrase,
  ScoreNumber,
  GameViewContainer,
  GameOptionsList,
  PopupContainer,
  TriggerButton,
  CloseButton,
  PopupImage,
  PopupBody,
  GameResultViewContainer,
  SelectedOptionsContainer,
  GameUserOptionContainer,
  GameParticipantText,
  GameParticipantChoiceImage,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lost: 'LOST',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    gameChoice: '',
  }

  onClickSetUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onClickGoToGameView = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(choice => choice.map)
    const randomNumber = Math.floor(Math.random() * 3)
    return gameChoicesList[randomNumber]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lost,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgress = () => {
    const {choicesList} = this.props
    return (
      <GameOptionsList>
        {choicesList.map(choice => (
          <GameOptions
            optionDetails={choice}
            onClickSetUserChoice={this.onClickSetUserChoice}
            key={choice.id}
          />
        ))}
      </GameOptionsList>
    )
  }

  renderGameWonView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU WON</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameLostView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>YOU LOSE</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, gameChoice} = this.state
    const {choicesList} = this.props
    const userChoiceObjectList = choicesList.filter(
      choice => choice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]
    const gameChoiceObjectList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObject = gameChoiceObjectList[0]
    return (
      <GameResultViewContainer>
        <SelectedOptionsContainer>
          <GameUserOptionContainer>
            <GameParticipantText>You</GameParticipantText>
            <GameParticipantChoiceImage
              src={userChoiceObject.image}
              alt="your choice"
            />
          </GameUserOptionContainer>
          <GameUserOptionContainer>
            <GameParticipantText>Other</GameParticipantText>
            <GameParticipantChoiceImage
              src={gameChoiceObject.image}
              alt="opponent choice"
            />
          </GameUserOptionContainer>
        </SelectedOptionsContainer>
        <ResultText>IT IS DRAW</ResultText>
        <PlayAgainButton type="button" onClick={this.onClickGoToGameView}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.win:
        return this.renderGameWonView()
      case gameStatusConstants.lost:
        return this.renderGameLostView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      case gameStatusConstants.inProgress:
        return this.renderGameInProgress()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ResultContainer>
          <OptionContainer>
            <Option>
              ROCK
              <br />
              <br />
              PAPER
              <br />
              <br />
              SCISSORS
            </Option>
          </OptionContainer>
          <ScoreContainer>
            <ScorePhrase>Score</ScorePhrase>
            <ScoreNumber>{score}</ScoreNumber>
          </ScoreContainer>
        </ResultContainer>
        <GameViewContainer>{this.renderGameView()}</GameViewContainer>
        <PopupContainer>
          <Popup
            modal
            trigger={<TriggerButton type="button">Rules</TriggerButton>}
            closeOnEscape
            window
          >
            {close => (
              <PopupBody>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png "
                  alt="rules"
                />
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseLine />
                </CloseButton>
              </PopupBody>
            )}
          </Popup>
        </PopupContainer>
      </AppContainer>
    )
  }
}

export default RockPaperScissors