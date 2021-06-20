import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = () => {
  const dispatch = useDispatch();
  const { techs, loading } = useSelector((state) => state.tech);

  useEffect(() => {
    dispatch(getTechs());
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map((t) => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

export default TechSelectOptions;
