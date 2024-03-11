export type progressStateType = {
  data: DataType[];
  currentCount: number;
  lineWidth: number;
};

export type DataType = { text: string; isActive: boolean };
