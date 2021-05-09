import { useState } from "react";
import { login, register } from "../pages/api/account";
import { useRouter } from "next/router";

export const AccountForm = ({ message, visible, setVisible }) => {
  const router = useRouter();
  const [msg, setMessage] = useState(message);
  const onClose = (e) => {
    setVisible(false);
  };

  const account_login = (user, pass) => {
    login(user, pass)
      .then((res) => {
        sessionStorage.setItem("token", res["Token"]);
        sessionStorage.setItem("username", res["Username"]);
        router.push({
          pathname: "/",
        });
      })
      .catch((err) => {
        console.error(err);
        setMessage(
          "Non è stato possibile autenticarti! Controlla di aver inserito le credenziali giuste oppure se non hai un account creane uno."
        );
      });
  };

  const account_register = (user, pass) => {
    register(user, pass)
      .then(() => {
        account_login(user, pass);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Non è stato possibile registrarsi!");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let user = e.target.user.value;
    let pass = e.target.pass.value;

    if (e.target.check.checked) {
      account_register(user, pass);
    } else {
      account_login(user, pass);
    }
  };

  return (
    <>
      {visible === true && (
        <div className="fixed bg-black bg-opacity-80 w-full h-full top-0 left-0 flex flex-col justify-center items-center">
          <form className="poetae-form" onSubmit={onSubmit}>
            {/* Header */}
            <div className="poetae-header">
              <h1>Benvenuto</h1>
              <span onClick={onClose}>X</span>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-5 p-6 font-serif">
              <div className="poetae-alert">
                <p>{msg}</p>
              </div>

              <div className="poetae-input">
                <label htmlFor="user">Username:</label>
                <input name="user" type="text" required />
              </div>

              <div className="poetae-input">
                <label htmlFor="pass">Password:</label>
                <input name="pass" type="password" required />
              </div>

              <div className="poetae-bottom">
                <div>
                  <input name="check" type="checkbox" />
                  <label htmlFor="check">Crea un account</label>
                </div>
                <input type="submit" value="Accedi" />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AccountForm;
