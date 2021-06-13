import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { DashboardLayout } from "../../components/DashboardLayout";
import { useTsSelector } from "../../hooks/useTsSelector";
import { getRepositories } from "../../thunks/repositoriesThunk";

export const Home = () => {
  const { repositories } = useTsSelector((state) => state.repositories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepositories());
  }, [dispatch]);

  return (
    <DashboardLayout name="home" title="Home">
      <div>
        <div>List of public repositories fetched from Github REST API.</div>
        <div className="mt-6">
          {repositories.map((repo) => (
            <div
              className="bg-white rounded-lg shadow mb-4 py-3 px-4 text-sm"
              key={repo.id}
            >
              <a href={repo.url}>
                <div className="pb-1 font-bold text-primary-dark">
                  {repo.name}
                </div>
              </a>
              <div>{repo.description || "**No description**"}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
