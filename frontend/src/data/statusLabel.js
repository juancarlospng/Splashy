// Status label helper — single source shared by page components.
import { STATUS } from "./programs";

export const statusLabel = (t, s) =>
  ({
    [STATUS.AVAILABLE]: t.status.available,
    [STATUS.IN_DEV]: t.status.inDevelopment,
    [STATUS.PLANNED]: t.status.planned,
    [STATUS.UNDER_REVIEW]: t.status.underReview,
  }[s] || t.status.planned);
