/**
 * Created by ParryPC on 11/1/17.
 */
import React from 'react';
import Modal from 'react-modal';

const GifModal = (props) => {
	if(!props.selectedGif) {
		return <div></div>;
	}

	return (
		<Modal
			isOpen={props.modalIsOpen}
			onRequestClose={() => props.onRequestClose()}>
			<div className="gif-modal">
				<img alt="Woah that's big Gif" src={props.selectedGif.images.original.url} />
				<button className="btn btn-primary" onClick={() => props.onRequestClose()}>Close</button>
			</div>
		</Modal>
	)
};

export default GifModal;