import { DetectedFacesFrame } from '../../../app/main/pictures/pictures.interface';

export const getNamePosition = (frame: DetectedFacesFrame) => {
  const coords = frame.coordinates;
  return {
    top: coords[0] + coords[1] - coords[3] + 6 + 'px',
    left: coords[3] + 16 + 'px',
  };
};
