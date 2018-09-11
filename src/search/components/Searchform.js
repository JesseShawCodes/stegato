import React from 'react';
import { connect } from 'react-redux';
import { searchItunes } from '../actions';
import './Searchform.css';

export class Searchform extends React.Component {
  search(e) {
    e.preventDefault();
    if (this.input.value.trim() === '') {
      return;
    }
    this.props.dispatch(searchItunes(this.input.value));
  }

  render() {
    return (
      <div className="search-section">
        <form className="musicsearch" onSubmit={(e) => this.search(e)}>
          <label htmlFor="artist" className="artist-label">Artist</label>
          <section className="search-form-input">
            <input type="search" ref={input => this.input = input} />
          </section>
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  music: state.music,
  loading: state.loading,
  error: state.error,
});

// export default Searchform
export default connect(mapStateToProps)(Searchform)
