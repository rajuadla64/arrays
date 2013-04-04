class ArrayController < ApplicationController


  @@a=Array.new
  @@a1=Array.new
  def array
    if params[:user_rating]
    a= params[:user_rating]
    @@a << (a.to_i)
 end
    @@len=@@a.length
  end
  def rating_cal
     @i=@@a.inject(:+)
     @i1= @i.to_f/@@len
    end
 def array_staff
    if params[:staff_rating]
      a= params[:staff_rating]
      @@a1 << (a.to_i)
end
          @@len1=@@a1.length
  end
  def rating_staff_cal
    @i=@@a1.inject(:+)
    @i1= @i.to_f/@@len1
  end
  def rating_percent_cal
    if request.post?
      @s=params[:result_of_staff_user]
      @u=params[:result_of_normal_user]
      @u_p=(60.0*(@u.to_f))/100.0
      @s_p=(40.0*(@s.to_f))/100.0
    end
  end
  def final_rate
    if request.post?
     @ss=params[:main1_result]
      @uu=params[:main_result]
      @final=@ss.to_f+@uu.to_f
  end
  end
end
