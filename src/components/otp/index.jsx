import React, { useState } from "react";
import "./index.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Tab component
const Tab = ({ label, onClick, isActive }) => {
  return (
    <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};

// Content component for each tab
const TabContent = ({ content }) => {
  return <div className="tab-content">{content}</div>;
};

// App component that includes Tabs and TabContent components
const Otp = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab

  const tabs = [
    {
      label: "jsx",
      content: (
        <SyntaxHighlighter language="javascript" style={docco}>
          {`import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import "./index.scss";

interface OTPComponentProps {
  length: number;
  onChange?: (otp: string) => void;
}

const OTPComponent: React.FC<OTPComponentProps> = ({ length, onChange }) => {
  const [otp, setOTP] = useState<string[]>(Array.from({ length }, () => ""));

  const inputRefs = useRef<Array<HTMLInputElement | null>>(
    Array(length).fill(null),
  );

  const focusNextInput = (index: number) => {
    if (index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const focusPrevInput = (index: number) => {
    if (index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!isNaN(Number(value)) && value.length === 1) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      // Move focus to the next input
      focusNextInput(index);
    } else if (value.length === 0) {
      // Backspace pressed, move focus to the previous input
      focusPrevInput(index);
    }
  };


  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index] !== "") {
        // If the current input is not empty, clear the current input
        const updatedOTP = [...otp];
        updatedOTP[index] = "";
        setOTP(updatedOTP);
      } else if (index > 0) {
        // If the current input is empty, remove the last digit from the previous input
        const updatedOTP = [...otp];
        updatedOTP[index - 1] = "";
        setOTP(updatedOTP);
        focusPrevInput(index);
      }
    }
  };

  useEffect(() => {
    // Focus on the first input when the component mounts
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(otp.join(""));
    }
  }, [otp, onChange]);

  return (
    <div className="otp-container">
      {otp.map((digit, index) => (
        <input
          title="Enter OTP"
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OTPComponent;

          `}
        </SyntaxHighlighter>
      ),
    },
    {
      label: "css",
      content: (
        <SyntaxHighlighter language="css" style={docco}>
          {`.otp-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.otp-container input {
  width: 40px;
  height: 40px;
  font-size: 18px;
  text-align: center;
  margin: 0 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.otp-container input:focus {
  outline: none;
  border-color: #007bff;
}
`}
        </SyntaxHighlighter>
      ),
    },
    {
      label: "scss",
      content: (
        <SyntaxHighlighter language="scss" style={docco}>
          {`.otp-container {
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 40px;
    height: 40px;
    font-size: 18px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }
}
`}
        </SyntaxHighlighter>
      ),
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="app-container">
      <div className="tabs">
        {/* Render each tab */}
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            isActive={activeTab === index}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
      {/* Render the content of the active tab */}
      <TabContent content={tabs[activeTab].content} />
    </div>
  );
};

export default Otp;
