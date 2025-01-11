export interface TopBarProps {
  page: string;
}

export interface Users {
  user_id: number;
  user_name: string;
  position: string;
}

export interface InOutLogs {
  log_id?: number; // Optional jika menggunakan auto-increment di database
  activity_type: string;
  pic_name: string | null;
  crate_id: string[]; // Ubah dari object[] ke string[]
  log_time: number;
  operator_name: string | null;
  batches: number | null;
  total_crate: number;
}

export interface Crate {
  crate_code: string;
  color: string;
  size: string;
  available: boolean;
  number: number;
  last_update: number;
  user_id: {
    user_name: string;
  };
}

export interface CardProps {
  value?: number;
  icon: React.ReactNode;
  title: string;
  uom?: string;
  className?: string;
  link?: string | undefined;
  crateData?: Crate[] | null;
}
