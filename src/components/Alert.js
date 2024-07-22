import { Component } from 'react';

// Base Alert Component
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
      borderRadius: '8px',
      borderColor: this.color,
      textAlign: 'center',
      fontSize: '14px',
      margin: '15px 0',
      padding: '12px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Roboto, sans-serif',
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

// Info Alert Component
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#3498db'; // Blue
    this.bgColor = '#ecf5ff'; // Light blue
  }
}

// Error Alert Component
class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#e74c3c'; // Red
    this.bgColor = '#fdecea'; // Light red
  }
}

// Warning Alert Component
class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#e67e22'; // Orange
    this.bgColor = '#fef3e2'; // Light orange
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
