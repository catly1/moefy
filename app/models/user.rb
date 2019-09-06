# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  dob             :date             not null
#  gender          :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password
    GENDERS = ['male', 'female', 'other', 'weeb']
    validates :gender, inclusion: { in: GENDERS }
    validates :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates_date :dob, on_or_before: lambda { 13.years.ago }

    after_initialize :ensure_session_token

    def validate_age
        if dob.present? && dob.year > 13.years.ago.year
            errors.add(:dob, 'You should be over 13 years old.')
        end
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end
end
