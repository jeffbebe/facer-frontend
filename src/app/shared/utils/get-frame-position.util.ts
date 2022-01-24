import { DetectedFacesFrame } from '../../../app/main/pictures/pictures.interface';

export const getFramePosition = (frame: DetectedFacesFrame) => {
  const coords = frame.coordinates;
  return {
    top: coords[0] + 'px',
    left: coords[3] + 'px',
    width: coords[1] - coords[3] + 'px',
    height: coords[2] - coords[0] + 'px',
  };
};
