require "pg"

class Createviz

  def connect_db()
    connection = PG::connect(:host => ENV['COFFEE_DB_HOST'],
                             :user => ENV['COFFEE_DB_USER'],
                             :password => ENV['COFFEE_DB_PASS'],
                             :dbname => ENV['COFFEE_DBNAME'],
                             :port => "5432")
    begin
      column_query = "SELECT viewlists.page_type, referer, watching_ip, created_at FROM viewlists WHERE watching_ip = 'fuga.fuga.hoge.hoge' AND user_agent ='hoge hoge' ORDER BY created_at ASC;"
      exec_query = connection.exec(column_query)
      exec_query.each do |tupple|
        p_t = tupple["page_type"]
        p_t.sub!(/https:\/\/www.coffee-cup.com/, '')
        p_t.sub!(/\/ja/, '')
        p_t.sub!(/\?locale=ja/, '')
        ref = tupple["referer"]
        ref.sub!(/no/, 'direct')
        ref.sub!(/https:\/\/www.coffee-cup.com/, '')
        ref.sub!(/\/ja/, '')
        ref.sub!(/\?locale=ja/, '')
        ref.sub!(/#.+/, '')
        words = '"' + ref + '"' + "->" + '"' + p_t + '"'
        puts words
      end
    ensure
      connection.finish
    end
  end

end

cv = Createviz.new
cv.connect_db()
