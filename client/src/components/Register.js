import SociralLogin from "./SociralLogin";

const Register = () => {
  return (
    <section class="">
      <div className="login">
        <h1 className="loginTitle">Choose a Register Method</h1>
        <div className="wrapper">
          <SociralLogin />
          <div className="center">
            <div className="line" />
            <div className="or">OR</div>
          </div>
          <div className="right">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail" />

            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confim Password" />
            <button className="submit">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
