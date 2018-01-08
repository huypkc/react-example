import * as React from 'react';
import GiphyService from '../../core/services/Giphy';
import Giphy from '../../core/models/Giphy';
import GifCard from './GifCard';
import './ExplorePage.css';
import ImageModal from './ImageModal';

export interface ExplorePageProps {

}

export interface ExplorePageState {
  items: Array<Giphy>;
  showImageModal: boolean;
  itemModal: Giphy;
}

class ExplorePage extends React.Component<ExplorePageProps, ExplorePageState> {
  constructor(props: ExplorePageProps) {
    super(props);
    this.state = { 
      items: [],
      showImageModal: false,
      itemModal: null,
    };
  }

  componentWillMount() {
    GiphyService.getTrendingGifs().then((gifs: Array<Giphy>) => {
      this.setState({ items: gifs });
    });
  }

  onClickImage(item: Giphy) {
    this.setState({
      showImageModal: true,
      itemModal: item,
    });
  }

  render() {
    const listItems = this.state.items.map((item: Giphy) => {
      return (
        <div className="col-xs-6 col-sm-4 col-md-3" key={item.id}>
          <GifCard item={item} onClickImage={(_item: Giphy) => this.onClickImage(_item)}/>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row ExplorePage--Grid">
          {listItems}
        </div>
        {
          this.state.itemModal &&
          <ImageModal show={this.state.showImageModal} item={this.state.itemModal} />
        }
      </div>
    );
  }
}

export default ExplorePage;
