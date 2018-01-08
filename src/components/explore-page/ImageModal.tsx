import * as React from 'react';
import Giphy from '../../core/models/Giphy';
import { Modal } from 'react-bootstrap';
import './ImageModal.css';

export interface ImageModalProps {
  show: boolean;
  item: Giphy;
}

export interface ImageModalState {
  show: boolean;
  item: Giphy;
}
class ImageModal extends React.Component<ImageModalProps, ImageModalState> {
  constructor(props: ImageModalProps) {
    super(props);
    this.state = {
      show: props.show,
      item: props.item,
    };
  }

  close() {
    this.setState({ show: false });
  }

  componentWillReceiveProps(nextProps: ImageModalProps) {
    if (nextProps.show !== this.state.show) {
      this.setState({ show: nextProps.show, item: nextProps.item });
    }
  }
  render() {
    return (
      <div className="ImageModal">
        <Modal
          show={this.state.show}
          onHide={() => this.close()}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {this.state.item.title || ''}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.item.image.originalSrc} alt={this.state.item.image.originalSrc}/>
        </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ImageModal;