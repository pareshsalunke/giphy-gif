/**
 * Created by ParryPC on 11/1/17.
 */
import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
	return (
		<Modal
			isOpen={props.modalIsOpen}
			onRequestClose={() => this.onRequestClose()}>
			<div>
				<img src={props.selectedGif.images.original.url} />
				<button onClick={() => props.onRequestClose()}>Close</button>
			</div>
		</Modal>
	)
};

export default GifModal;