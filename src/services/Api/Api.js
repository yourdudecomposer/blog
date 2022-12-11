class Api {
  url = "https://blog.kata.academy/api/";

  limit = 20;

  user = localStorage.getItem("user");

  makeObjForFetch = (met, data, auth) =>
    auth
      ? {
          method: met,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${JSON.parse(this.user).token}`,
          },
          body: JSON.stringify(data),
        }
      : {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

  makeObjForFetchWithoutData = (met) => ({
    method: met,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${JSON.parse(this.user).token}`,
    },
  });

  getArticles = async (ofset = 0) => {
    if (this.user) {
      const response = await fetch(
        `${this.url}articles/?limit=${this.limit}&offset=${ofset}`,
        {
          headers: {
            Authorization: `Token ${JSON.parse(this.user).token}`,
          },
        }
      );
      return response.json();
    }
    const response = await fetch(
      `${this.url}articles/?limit=${this.limit}&offset=${ofset}`
    );
    return response.json();
  };

  getArticle = async (slug) => {
    if (this.user) {
      const response = await fetch(`${this.url}articles/${slug}`, {
        headers: {
          Authorization: `Token ${JSON.parse(this.user).token}`,
        },
      });
      return response.json();
    }
    const response = await fetch(`${this.url}articles/${slug}`);
    return response.json();
  };

  createArticle = async (data) => {
    const response = await fetch(
      `${this.url}articles`,
      this.makeObjForFetch("POST", data, true)
    );
    if (response.ok) return response.json();
    throw new Error("Can't create article");
  };

  editArticle = async (data, slug) => {
    const response = await fetch(
      `${this.url}articles/${slug}`,
      this.makeObjForFetch("PUT", data, true)
    );
    if (response.ok) return response.json();
    throw new Error("Can't edit article");
  };

  deleteArticle = async (slug) => {
    const response = await fetch(
      `${this.url}articles/${slug}`,
      this.makeObjForFetchWithoutData("DELETE")
    );

    if (response.ok) return;
    throw new Error("Can't delete article");
  };

  registerUser = async (data) => {
    const response = await fetch(
      `${this.url}users`,
      this.makeObjForFetch("POST", data)
    );
    if (response.status === 200) {
      return response.json();
    }
    const res = await response.json();
    throw new Error(JSON.stringify(res.errors));
  };

  loginUser = async (data) => {
    const response = await fetch(
      `${this.url}users/login`,
      this.makeObjForFetch("POST", data)
    );
    if (response.ok) return response.json();
    throw new Error("Can't login");
  };

  updateUser = async (data) => {
    const response = await fetch(
      `${this.url}user`,
      this.makeObjForFetch("PUT", data, true)
    );
    if (response.ok) return response.json();
    const res = await response.json();
    throw new Error(JSON.stringify(res.errors));
  };

  addFavorites = async (slug) => {
    const response = await fetch(
      `${this.url}articles/${slug}/favorite`,
      this.makeObjForFetchWithoutData("POST")
    );
    if (response.ok) return;
    throw new Error("Can't like");
  };

  deleteFavorites = async (slug) => {
    const response = await fetch(
      `${this.url}articles/${slug}/favorite`,
      this.makeObjForFetchWithoutData("DELETE")
    );
    if (response.ok) return;
    throw new Error("Can't delete like");
  };
}

export default new Api();
