import React, { useCallback } from "react";
import { Button } from "../../components";
import storage from '../../common/storage';
import { IStorage } from "../../common/storage/types";
import { TOKEN_KEY } from "../../constants";
import { useHistory } from "react-router-dom";

import './home.scss';

interface HomeProps {
  storageService?: IStorage;
}

export const Home = (props: HomeProps) => {
  const { storageService = storage } = props;
  const history = useHistory();

  const logout = useCallback(() => {
    storageService.remove(TOKEN_KEY);
    history.push('/login');
  }, [storageService, history]);

  return (
    <div className="home">
      <Button appearance="primary" className="button--logout" onClick={logout}>Logout</Button>
    </div>
  );
};
