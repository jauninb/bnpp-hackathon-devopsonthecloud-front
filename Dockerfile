FROM tomcat

WORKDIR /usr/local/tomcat/

RUN rm -rf webapps/ROOT/*
COPY dist/* webapps/ROOT/

EXPOSE 8080

CMD ["bin/catalina.sh", "run"]
