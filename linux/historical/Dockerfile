# This dockerfile will be used to bootstrap the docker changes for the cosmos SDK, and will be built hourly.

FROM manjarolinux/base

ENV GOPATH=/go
ENV PATH=$PATH:/go/bin

# everything needed for cosmos development
RUN pacman -Syyu --noconfirm go base-devel git leveldb rocksdb make python snappy git-lfs jq wget curl protobuf yarn rustup npm unzip docker


# Useful tools
# concept: we want every tool frequently used when building in cosmos.
RUN go install mvdan.cc/gofumpt@latest && \
    go install github.com/cweill/gotests/gotests@latest && \
    go install github.com/fatih/gomodifytags@latest && \
    go install github.com/josharian/impl@latest && \
    go install github.com/haya14busa/goplay/cmd/goplay@latest && \
    go install github.com/go-delve/delve/cmd/dlv@latest && \
    go install honnef.co/go/tools/cmd/staticcheck@latest && \
    go install golang.org/x/tools/gopls@latest && \
    go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest && \
    go install google.golang.org/protobuf/cmd/protoc-gen-go@latest && \
    go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest && \
    go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@v1.16.0 && \
    go install github.com/cosmos/cosmos-proto/cmd/protoc-gen-go-pulsar@latest && \
    go install honnef.co/go/tools/cmd/staticcheck@latest && \
    go install github.com/bufbuild/buf/cmd/buf@latest


RUN rustup toolchain install stable

# Install slightly more complicated but still useful tools
RUN git clone https://github.com/cosmos/cosmos-proto && \
    cd cosmos-proto && \
    go install ./... && \ 
    cp /go/bin/* /usr/bin && \
    rm -rf /go && \
    mkdir /go && \
    chmod -R 777 /go
