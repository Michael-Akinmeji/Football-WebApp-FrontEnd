import React from "react";

import styled from "styled-components";
import theme from "../utils/theme";

const Points = () => {
  return (
      <PointsContainer>
          <div className="d-flex flex-column justify-content-center align-items-center py-3 px-2 points-section">
              <h6 className="text-center mb-3">Points this week</h6>
              <h1 className="text-center">45</h1>
          </div>
      </PointsContainer>
  );
};

const PointsContainer = styled.div`
    .points-section {
        background-color: ${theme.colors.light};
        border-radius: 20px;
    }
    h6 {
        font-size: 20px;
        line-height: 30px;
        color: ${theme.colors.gray};
    }
    h1 {
        font-weight: bold;
        font-size: 50px;
        line-height: 76px;
        color: ${theme.colors.grey};
    }
`;

export default Points;
