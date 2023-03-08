class Api::V1::ProfilesController < ApplicationController
    def index
        render json: Profile.all, status: 200
    end
end