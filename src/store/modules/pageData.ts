import { PageDataState, RootState, PageData } from '../store.types';
import { GetterTree, ActionTree, MutationTree, Module } from 'vuex';
import { PAGE_DATA } from '../getters.names';
import { FETCH_PAGE_DATA } from '../actions.names';
import { Route } from 'vue-router';
import { API_URL } from '@/global';
import axios from 'axios';
import { SET_PAGE_DATA, SET_PAGE_DATA_ERROR } from '../mutations.names';

const state: PageDataState = {
  page: null,
  error: false
};

const getters: GetterTree<PageDataState, RootState> = {
  [PAGE_DATA](state: PageDataState): PageData | null {
    return state.page;
  }
};

const actions: ActionTree<PageDataState, RootState> = {
  async [FETCH_PAGE_DATA]({ commit }, route: Route): Promise<any> {
    return new Promise((resolve, reject) => {
      const path = route.path;
      axios
        .get(`${API_URL}/pages/find?html_path=${path}`)
        .then(({ data }) => {
          commit(SET_PAGE_DATA, data);
          resolve(data);
        })
        .catch((e: any) => {
          commit(SET_PAGE_DATA_ERROR);
          reject(e);
        });
    });
  }
};

const mutations: MutationTree<PageDataState> = {
  [SET_PAGE_DATA](state: PageDataState, payload: any) {
    state.page = payload;
    state.error = false;
  },
  [SET_PAGE_DATA_ERROR](state: PageDataState) {
    state.page = null;
    state.error = true;
  }
};

const namespaced: boolean = false;

const pageDataModule: Module<PageDataState, RootState> = {
  namespaced,
  getters,
  actions,
  mutations,
  state
};

export default pageDataModule;
