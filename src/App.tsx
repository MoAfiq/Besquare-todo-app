import * as React from "react";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState<string>("");
  const [gender, setGender] = React.useState<string | undefined>("Male");
  const [age, setAge] = React.useState<string | undefined>("");
  const [color, setColor] = React.useState<string | undefined>("red");

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const changeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
  };

  const changeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const changeColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name, gender, age, color);
  };

  return (
    <div className="pa-16">
      <h2>Fill the Form!</h2>
      <form onSubmit={handleSubmit}>
        <Input name="Name" value={name} onChange={changeName} />
        <Select name="Gender" value={gender} onChange={changeGender} />
        <Input name="Age" value={age} onChange={changeAge} />
        <Select name="Favourite Color" value={color} onChange={changeColor} />
        <button type="submit" className="btn-primary mb-16">
          Submit
        </button>
        <button className="btn-secondary">Clear</button>
      </form>
    </div>
  );
}

type InputType = {
  name: string;
  value: string | undefined;
  onChange: (change: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChange, name }: InputType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
};

type SelectType = {
  name: string;
  value: string | undefined;
  onChange: (changeColor: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ value, onChange, name }: SelectType) => {
  return (
    <div className="mb-16">
      <label>{name}</label>
      <select value={value} onChange={onChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="skyblue">Sky Blue</option>
      </select>
    </div>
  );
};

//  <label>{name}</label>
//       <select value={value} onChange={onChange}>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
