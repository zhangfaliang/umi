import React, { Component, Fragment } from 'react';
import BetButton from '../components/betButton';
import Line from '../components/line';
import BetMatchInfo from '../components/betMatchInfo';
import BetButtonCell from '../components/betButtonCell';
import { ProgressText, BetMatchCell } from '../components/betMatchCell';
import Block from '../components/block';
import { LeftTitle, Label, LabelRight, LabelCenter } from '../components/label';
import BetMatchGroup from '../components/betMatchGroup';
import Button from '../components/button';
import BefoeMatchCellGrooup from '../components/befoeMatchCellGrooup';
import OtherMatch from '../components/otherMatch';
class testBetButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sp: 1.2,
      active: false,
    };
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState(() => {
        return {
          sp: 1.5,
          active: false,
        };
      });
    }, 1000);
    setTimeout(() => {
      this.setState(() => {
        return {
          sp: 0.9,
          disabled: false,
          disabled: true,
        };
      });
    }, 1600);
  };
  render() {
    return (
      <div>
        <Label showTBBorder={true}>
          <LeftTitle gameTypeImgShow={false} prefixCls="live-inplay" />
          <LabelRight prefixCls="live-inplay" showIcon={true} iconType="mycopy2" rightText={5} />
        </Label>
        <Label showTBBorder={true} prefixCls="match-detail">
          <LeftTitle
            prefixCls="match-detail"
            leftText=" Aug 18, 2018"
            gameTypeImgUrl=""
            gameTypeImgShow={false}
          />
          <LabelCenter />
          <LabelRight
            prefixCls="match-detail"
            disabled={false}
            showIcon={true}
            iconType="shoucang"
            activeIconType="mycopy1"
          />
        </Label>
        {[1, 2].map(item => {
          return (
            <BetMatchGroup key={item}>
              <Label>
                <LeftTitle leftText={'Soccer Highlights23'} gameType="basketball" />

                <LabelRight arrayText={[1, 'x', 2]} />
              </Label>
              {[1, 2, 3].map((item, index) => {
                return (
                  <BetMatchCell
                    key={item}
                    prefixCls={'push-inplay'}
                    clickBetBtn={() => {
                      console.log('test12');
                    }}
                  >
                    <BetMatchInfo />
                    {index == 0 ? (
                      <ProgressText />
                    ) : (
                      <BetButtonCell prefixCls={'push-inplay'}>
                        {[1, 2, 3].map(item => {
                          return <BetButton key={item} {...this.state} />;
                        })}
                      </BetButtonCell>
                    )}
                  </BetMatchCell>
                );
              })}
            </BetMatchGroup>
          );
        })}
        <Button prefixCls={'check-all'} />
        {[1].map(item => {
          return (
            <BetMatchGroup key={item}>
              <Label showTBBorder={true}>
                <LeftTitle leftText={'Soccer Highlights 56'} />
              </Label>
              {[1, 3].map(item => {
                return (
                  <BefoeMatchCellGrooup key={item}>
                    <Label prefixCls="push-before">
                      <LeftTitle
                        prefixCls="push-before"
                        gameTypeImgShow={false}
                        leftText={'Today'}
                      />
                      <LabelRight prefixCls="push-before" arrayText={[1, 'x', 2]} />
                    </Label>
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <BetMatchCell
                          key={item}
                          prefixCls={'push-before'}
                          clickBetBtn={() => {
                            console.log('test12');
                          }}
                        >
                          <BetMatchInfo
                            homeScore=""
                            awayScore=""
                            isLive={false}
                            time={`4th set 10'`}
                          />
                          <BetButtonCell prefixCls={'push-before'}>
                            {[1, 2, 3].map(item => {
                              return <BetButton key={item} {...this.state} />;
                            })}
                          </BetButtonCell>
                        </BetMatchCell>
                      );
                    })}
                  </BefoeMatchCellGrooup>
                );
              })}
            </BetMatchGroup>
          );
        })}
        <Button prefixCls={'check-all'} />
        {[1].map(item => {
          return (
            <BetMatchGroup key={item}>
              <Label showTBBorder={true}>
                <LeftTitle prefixCls='white' gameTypeImgShow={false} leftText={'Other Highlights'} />
              </Label>
              <OtherMatch>
                {[1, 2, 4].map(item => {
                  return (
                    <Label prefixCls="other-match" key={item}>
                      <LeftTitle prefixCls='other-match-item'  gameType="esport" leftText={'Other Highlights'} />
                      <LabelRight showIcon={true} iconType="mycopy" />
                    </Label>
                  );
                })}
              </OtherMatch>
            </BetMatchGroup>
          );
        })}
      </div>
    );
  }
}

export default testBetButton;
