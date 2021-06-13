import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { DashboardLayout } from "../../components/DashboardLayout";
import { useTsSelector } from "../../hooks/useTsSelector";
import { getGists } from "../../thunks/gistsThunk";

export const Settings = () => {
  const { gists } = useTsSelector((state) => state.gists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  return (
    <DashboardLayout name="settings" title="Settings">
      <div>
        <div>List of public gists fetched from Github REST API.</div>
        <div className="mt-6">
          {gists.map((gist) => (
            <div
              className="bg-white rounded-lg shadow mb-4 py-3 px-4 text-sm"
              key={gist.id}
            >
              <a href={gist.url}>
                <div className="pb-1 font-bold text-primary-dark">
                  {gist.fileNames.join(", ")}
                </div>
              </a>
              <div>{gist.description || "**No description**"}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
