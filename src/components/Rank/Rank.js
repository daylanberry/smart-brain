import React from 'react';

class Rank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emoji: ''
    }
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.entries === this.props.entries && prevProps.name === this.props.name) {
      return null
    } else {
      this.generateEmoji(this.props.entries)
    }
  }

  generateEmoji = (entries) => {
    fetch(`https://ktpwhub2si.execute-api.us-east-1.amazonaws.com/prod/rank/create?rank=${entries}`)
      .then(response => response.json())
      .then(data => this.setState({ emoji: data.input}))
      .catch(err => console.log(err))
  }


  render() {
    const { entries, name } = this.props
    const { emoji } = this.state
    return (
      <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {entries}
        </div>
        <div className='white f3'>
          {`Rank Badge: ${emoji}`}
        </div>
      </div>
    );

  }

}


export default Rank;