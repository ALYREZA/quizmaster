import React, {Component} from 'react';
import Buttom from '../components/Buttom';
import Number from '../components/Number';
import Operator from '../components/Operator';
import {connect} from "react-redux";
import {saveNumbersToStore} from "../actions/setNumbers";
import {saveAnswerToStore} from '../actions/setAnswer';
import {saveOperatorToStore} from "../actions/setOperator";
import {chooseWrongAnswer} from "../actions/chooseWrongAnswer";
import {setCorrectAnswer} from "../actions/chooseCorrectAnswer";
import {Grid, Row, Col} from 'react-flexbox-grid';


export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answers: null,
            alert: false,
        }

    }

    selectAnswer(answer) {
        const correctAnswer = this.props.correctAnswer;

        if (correctAnswer !== answer) {
            this.props.wrongAnswer();
            this.setState({
                alert: true,
            });

            setTimeout(() => {
                this.setState({
                    alert: false,
                });
            }, 2000)
        } else {
            this.props.correctness();
        }

        this.refreshApp();
    }

    refreshApp() {

        /////////////////////////
        const cnt = this.randomOperator();
        ////////////////////////

        var {first, second} = this.randomNumber();

        ///////////////////

        var {answer, code} = this.setAnswer(cnt, first, second);

        this.setState({
            answers: this.createAnswers(answer, code)
        });
    }


    componentWillMount() {

        this.refreshApp()

    }


    randomOperator() {
        const cnt = Math.floor(Math.random() * 4);
        let dataLast = {
            index: cnt
        }
        this.props.setOperatorState(dataLast);

        return cnt;
    }

    createAnswers(answer, code) {
        var canChoose = [];

        if (code === 3) {

            const answerMinus1 = (answer - .1).toFixed(1)
            const answerMinus2 = (answer - .2).toFixed(1)
            const answerPlus1 = (answer + .1).toFixed(1)

            canChoose.push(answer, answerMinus1, answerMinus2, answerPlus1)
        } else {
            canChoose.push(answer, answer - 1, answer - 2, answer + 1)
        }
        return this.shuffle(canChoose)
    }

    randomNumber() {
        const level = this.props.level;
        const tableOflevel = [50, 89, 110, 220, 338, 482, 519, 614, 712, 862, 987, 1024]

        const highNumber = (tableOflevel[level] ? level : tableOflevel.length - 1)

        let numberOne = 1 + Math.floor(Math.random() * tableOflevel[highNumber]);
        let numberTwo = 1 + Math.floor(Math.random() * tableOflevel[highNumber]);
        let first, second = 0;
        if (numberOne >= numberTwo) {
            first = numberOne;
            second = numberTwo
        } else if (numberOne < numberTwo) {
            first = numberTwo
            second = numberOne
        }
        let dataFirst = {
            first: first,
            second: second,
        }
        this.props.setNumbers(dataFirst);

        return dataFirst;
    }

    setAnswer(code, first, second) {
        var result;
        switch (code) {
            case 0:
                result = first + second;
                break;
            case 1:
                result = first - second;
                break;
            case 2:
                result = first * second;
                break;
            case 3:
                const factor = Math.pow(10, 1);
                const divided = first / second;
                result = Math.round(divided * factor) / factor;
                break;
            default:
                result = code
        }
        let data = {
            answer: result,
            code: code
        }

        this.props.setCorrectAnswer(data)

        return data;
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Grid>
                        <Row center={'xs'}>
                            <div style={{display: 'inline-block'}}>
                                <Number val={this.props.firstNum}/>
                                <Operator operator={this.props.operatorIndex}/>
                                <Number val={this.props.secondNum}/>
                            </div>
                        </Row>
                    </Grid>

                    <Grid>
                        <Row center={'xs'}>
                            <Col style={{marginRight: 30}}>
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        Level: {this.props.level}
                                    </p>
                                </div>
                            </Col>
                            <Col style={{width: '10%'}}>
                                <div style={{textAlign: 'center'}}>
                                    <p style={{color: 'red'}}>
                                        {this.state.alert ? "Wrong" : "" }
                                    </p>
                                </div>
                            </Col>
                            <Col style={{marginLeft: 30}}>
                                <div style={{textAlign: 'center'}}>
                                    <p>
                                        score: {this.props.score}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>


                    <Grid>
                        <div style={{ display: 'inline-block'}}>

                            <Row center={'xs'} md={2}>

                                <Col>
                                    <Buttom val={this.state.answers[0]}
                                            onClick={() => this.selectAnswer(this.state.answers[0])} key={1}/>
                                </Col>
                                <Col>
                                    <Buttom val={this.state.answers[1]}
                                            onClick={() => this.selectAnswer(this.state.answers[1])} key={2}/>
                                </Col>

                            </Row>
                            <Row center={'xs'} md={2}>
                                <Col>
                                    <Buttom val={this.state.answers[2]}
                                            onClick={() => this.selectAnswer(this.state.answers[2])} key={3}/>
                                </Col>
                                <Col>
                                    <Buttom val={this.state.answers[3]}
                                            onClick={() => this.selectAnswer(this.state.answers[3])} key={4}/>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                </Row>
            </Grid>
        )
            ;
    }


};


const mapStateToProps = store => {
    return {
        firstNum: store.firstNumber,
        secondNum: store.secondNumber,
        operatorIndex: store.operator,
        correctAnswer: store.correctAnswer,
        level: store.level,
        score: store.score
    }
}

const mapDispatchToProps = (dispatch) => ({
    setNumbers: (data) => dispatch(saveNumbersToStore(data)),
    setCorrectAnswer: (data) => dispatch(saveAnswerToStore(data)),
    setOperatorState: (data) => dispatch(saveOperatorToStore(data)),
    wrongAnswer: () => dispatch(chooseWrongAnswer()),
    correctness: () => dispatch(setCorrectAnswer())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)




