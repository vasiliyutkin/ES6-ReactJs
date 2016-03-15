import React from 'react';
import { Link }  from 'react-router';
import Preview from './Preview';

export default React.createClass({
  componentDidMount: function() {
    var links = document.querySelectorAll('.link');
    [].forEach.call(links, function(item) {
        item.addEventListener('click', function(e) {
          for (var i = links.length - 1; i >= 0; i--) {
            links[i].classList.remove('active');
          };
          e.target.classList.add('active');
        }, false)
    })
  },
  render() {
    return (
      <div>
      <header>
        <h1>Super header</h1>
      </header>
        <nav>
          <Link className='link' to="/">Main</Link>
          <Link className='link' to="/about">About</Link>
          <Link className='link' to="/descr">Description</Link>
          <Link className='link' to="/info">Info</Link>
        </nav>
        <main>
          <section>
              {this.props.children || <Preview />}
          </section>
        </main>
      </div>
    )
  }
});
