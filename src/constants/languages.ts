interface LanguageContent {
  password: string;
  login: {
    header: string;
    subHeader: string;
    loginTitle: string;
  };
}

interface Languages {
  vi: LanguageContent;
  en: LanguageContent; // Sử dụng Partial để cho phép các thuộc tính có thể bị bỏ trống
}

export const Languages: Languages = {
  vi: {
    password: 'Mật khẩu',
    login: {
      header: '150+ triệu',
      subHeader: 'người dùng lựa chọn Colennao', // Sử dụng dấu nháy đơn cho 'sub-header'
      loginTitle: 'Đăng nhập bằng email để tạo nên kế hoạch tập luyện cho riêng bạn'
    },
  },
  en: {
    password: 'Password',
    login: {
      header: '150+ million',
      subHeader: 'users have chosen Colennao', // Sử dụng dấu nháy đơn cho 'sub-header'
      loginTitle: 'Login with your email to access your personalized plan'
    },
  },
};
