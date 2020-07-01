import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import LogoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={LogoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Pesquise um repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/50886716?s=460&u=6ba741f13199906272bad247efc296d14f1f5c7d&v=4"
          alt="Luan"
        />
        <div>
          <strong>Github_explorer</strong>
          <p> A web app to find users and repositorys on GitHub </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/50886716?s=460&u=6ba741f13199906272bad247efc296d14f1f5c7d&v=4"
          alt="Luan"
        />
        <div>
          <strong>Github_explorer</strong>
          <p> A web app to find users and repositorys on GitHub </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/50886716?s=460&u=6ba741f13199906272bad247efc296d14f1f5c7d&v=4"
          alt="Luan"
        />
        <div>
          <strong>Github_explorer</strong>
          <p> A web app to find users and repositorys on GitHub </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
