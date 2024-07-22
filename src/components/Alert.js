import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: '2px',
      borderStyle: 'solid',
      fontWeight: 'bolder',
      borderRadius: '12px',
      borderColor: this.color,
      textAlign: 'center',
      fontSize: '14px',
      margin: '15px 0',
      padding: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#3498db'; // blue
    this.bgColor = '#ecf5ff'; // light blue
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#e74c3c'; // red
    this.bgColor = '#fdecea'; // light red
  }
}

export { InfoAlert, ErrorAlert };
