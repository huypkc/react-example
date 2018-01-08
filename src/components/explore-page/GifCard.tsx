import * as React from 'react';
import Giphy from '../../core/models/Giphy';
import './GifCard.css';

export interface GifCardProps {
  item: Giphy;
  onClickImage: (item: Giphy) => void;
}

export interface GifCardState {
  item: Giphy;
  showImageModal: boolean;
  views: number;
  comments: number;
  liked: number;
}

class ExplorePage extends React.Component<GifCardProps, GifCardState> {
  constructor(props: GifCardProps) {
    super(props);
    this.state = {
      item: props.item,
      showImageModal: false,
      views: Math.floor(Math.random() * 1000),
      comments: Math.floor(Math.random() * 50),
      liked: Math.floor(Math.random() * 400)
    };
  }

  handleClick(e: any) {
    this.props.onClickImage(this.state.item);
  }

  render() {
    return (
      <div className="GifCard">
        <div className="GifCard--Image">
          <img 
          src={this.state.item.image.previewSrc}
          alt={this.state.item.image.previewSrc}
          onClick={(e) => this.handleClick(e)} />
          <div className="ButtonGroup">
            <button className="btn">
              <i className="fa fa-paperclip" aria-hidden="true" />
            </button>
            <div className="GifCard--Statistics">
              <span>
                <i className="fa fa-eye" aria-hidden="true" /><span>{this.state.views}</span>
              </span>
              <span>
                <i className="fa fa-comment" aria-hidden="true" /><span>{this.state.comments}</span>
              </span>
              <span>
                <i className="fa fa-heart" aria-hidden="true" /><span>{this.state.liked}</span>
              </span>
            </div>
          </div>
        </div>
        <div className="Author">
          {
            this.state.item.user && this.state.item.user.banner &&
            // tslint:disable-next-line:max-line-length
            <img className="rounded-circle col-md-3" src={this.state.item.user.banner} alt={this.state.item.user.banner} />
          }
          <div className="col-md-9 Author--Name">{this.state.item.user ? this.state.item.user.displayName : '#NA'}</div>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
